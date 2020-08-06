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

module.exports = { FromNow };