/**
 * @name: 复制到剪贴板
 * @param: {copytxt} 复制的文本
 */

export function useCopyClipboard (copytxt = '') {
  const fitCopy = () => {
    const input = document.createElement('input') as HTMLInputElement
    input.style.cssText = 'position: fixed;top: -100px;'
    document.body.appendChild(input)
    input.setAttribute('value', copytxt)
    input.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
    document.body.removeChild(input)
  }
  // 复制到剪切板
  const copy = () => {
    if (!window.navigator.clipboard) {
      fitCopy()
      return
    }
    window.navigator.clipboard
      .writeText(copytxt)
      .then()
      .catch(() => {
        fitCopy()
      })
  }
  copy()
}
