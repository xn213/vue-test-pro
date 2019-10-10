export default function resCheck(res) {
  return res.err_no === 0 || res === true
}
