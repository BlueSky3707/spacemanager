// @ts-nocheck
/* eslint-disable */
class DragElement {
    constructor (root) {
      this.dom = root
      this.bind()
    }
  
    mouseDownListener (ev) {
      ev.preventDefault()
  
      const currentLeft = this.dom.offsetLeft
      const currentTop = this.dom.offsetTop
  
      const currentPageX = ev.pageX
      const currentPageY = ev.pageY
  
      const move = (ev) => {
        console.log('move')
        let left = ev.pageX - currentPageX + currentLeft
        let top = ev.pageY - currentPageY + currentTop
  
        left < 0 && (left = 0)
        top < 0 && (top = 0)
  
        const maxLeft = 1920 - this.dom.clientWidth
        const maxTop = 1080 - this.dom.clientHeight
        left > maxLeft && (left = maxLeft)
        top > maxTop && (top = maxTop)
        this.dom.style.left = left + 'px'
        this.dom.style.top = top + 'px'
      }
      const up = () => {
        document.removeEventListener('mousemove', move, false)
        document.removeEventListener('mouseup', up, false)
      }
  
      document.addEventListener('mousemove', move, false)
      document.addEventListener('mouseup', up, false)
    }
  
    bind = () => {    
      this.dom.style.cursor = 'move'
      const mouseDownListenerBack = (e) => {
        this.mouseDownListener(e)
      }
  
      this.dom.addEventListener(
        'mousedown',
        mouseDownListenerBack,
        false
      )
  
      return mouseDownListenerBack
    }
  }
  
  export default DragElement
  