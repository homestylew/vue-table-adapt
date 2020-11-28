import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
import { throttle } from 'lodash';
const doResize = async(el, binding, vnode) => {
  const { componentInstance: $table } = await vnode;
  if (!$table) return;
  if (!$table.height) {
    throw new Error(`必须对使用自定义指令的元素添加一个height属性,例如：height='100px'`)
  }
  const { value } = binding;
  let bottomHeight=0;
  try {
    if(value&&value.className&&Array.isArray(value.className)){
      const{ className:retArr = [] }=value;
      retArr.forEach(item=>{
        if(document.querySelector(`.${item}`)&&document.querySelector(`.${item}`).offsetHeight){
          bottomHeight += document.querySelector(`.${item}`).offsetHeight * 1;
        }
      })
      if(value&&value.custom&&parseInt(value.custom)){
        bottomHeight+=parseInt(value.custom);
      }
      bottomHeight=parseInt(bottomHeight);
    }
  } catch (error) {
    bottomHeight=0;
  }

  const height = (window.innerHeight||document.body.clientHeight) - el.getBoundingClientRect().top - (bottomHeight||0);
  if(height < 0)return;
  $table.layout.setHeight(height);
  $table.doLayout();
}
export default {
  bind(el, binding, vnode) {
    if(typeof window==undefined)return;
    const { value } = binding;
    let time=1000;
    if(value&&value.duration){
      time=value.duration;
    }
    el.resizeListener=throttle(() => {doResize(el, binding, vnode)},time);
    addResizeListener(window.document.body, el.resizeListener);
  },
  inserted(el, binding, vnode) {
    if(typeof window==undefined)return;
    doResize(el, binding, vnode);
  },
  unbind(el) {
    removeResizeListener(window.document.body, el.resizeListener);
  }
}
