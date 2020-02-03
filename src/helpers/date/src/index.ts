import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('en-gb')
dayjs.extend(LocalizedFormat)

export default dayjs
