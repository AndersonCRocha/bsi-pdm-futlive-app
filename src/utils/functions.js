export const sleep = async time =>
  new Promise(resolve => setTimeout(resolve, time))

export const decodeUTF8 = string => decodeURIComponent(escape(string))
