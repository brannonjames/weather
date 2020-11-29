import moment from 'moment';

export default class DateService {

  static WEATHER_API_DATE_FORMAT = 'YYYY-MM-DD HH:mm';

  static instance = new DateService();

  static convertDateStringtoAMPM = (dateStr: string) : string => {
    const m = moment(dateStr, DateService.WEATHER_API_DATE_FORMAT);
    const hours = m.get('hour');
    if (hours > 12) {
      return `${hours % 12}PM`;
    }
    if (hours === 0) {
      return '12AM';
    }
    if (hours === 12) {
      return '12PM';
    }
    return `${hours}AM`;
  }
}