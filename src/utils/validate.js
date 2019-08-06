/**
 * Created by jiachenpan on 16/11/18.
 */

/* 是否是公司邮箱*/
export function validateEmail(str) {
	// const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreetcn\.com$/i;
	const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([(www.111cn.net)a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	return reg.test(str.trim());
}

/* 合法uri*/
export function validateURL(textval) {
	const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
	return urlregex.test(textval);
}

/* 小写字母*/
export function validateLowerCase(str) {
	const reg = /^[a-z]+$/;
	return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase(str) {
	const reg = /^[A-Z]+$/;
	return reg.test(str);
}

/* 大小写字母*/
export function validateAlphabets(str) {
	const reg = /^[A-Za-z]+$/;
	return reg.test(str);
}

/* 校验手机号码 */
export function validatePhone(str) {
	const reg = /^(0[0-9]{2,3}(\-)?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$)/;
	return reg.test(str.trim());
}

/* k8s命名校验 */
export function validateNameInk8s(str) {
    const nameRegex = /(^[a-z]){1}([a-z]|[0-9]|[-]){2,61}([a-z]|[0-9]){1}$/;
    return nameRegex.test(str);
}

/* 验证0和非0开头的数字 */
export function validateNumber(str) {
    //const reg = /^(0|[1-9][0-9]*)$/;
    const reg = /^\+?[1-9][0-9]*$/;
    return reg.test(str);
}

/* 校验域名 符合ingress 命名规则 */
export function validateDomainName(str) {
    const reg = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/;
    return reg.test(str);
}


