/*
 * @params {string} url 请求地址
 * @params {object} resOpts 请求配置参数
 */
export function downloadFile(url) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = process.env.VUE_APP_BASE_API + url
  link.click()
}
