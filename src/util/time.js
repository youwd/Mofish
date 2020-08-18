import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

function FromNow(time) {
    let result;
    if (dayjs().day() - dayjs(time).day()) {
        result = dayjs(time).format('YYYY-MM-DD HH:mm');
    } else {
        result = dayjs(time).fromNow();
    }
    return result;
}

/**
 * 格式化时间
 * @param {*} time 格式化的时间
 * @param {*} type 要输出的格式类型 'YYYY-MM-DD'
 */
function Format(time, type) {
    console.log(111);
    return dayjs(time).format(type);
}

module.exports = { FromNow, Format };