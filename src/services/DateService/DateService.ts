import moment from 'moment';

export default class DateService {

  static WEATHER_API_DATE_FORMAT = 'YYYY-MM-DD HH:mm';

  static instance = new DateService();

  /**
   *
   * @param dateStr - a date string with the WEATHER_API_DATE_FORMAT formatting
   * @returns a 12-hour hour
   * example: 8am, 2pm, 12am, etc...
   */
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
  };

  /**
   *
   * @param dateStr - a date string with the WEATHER_API_DATE_FORMAT formatting
   * @returns A day of the week
   * example: Sunday, Tuesday
   */
  static convertDateStrToDayofWeek = (dateStr: string) : string => {
    const m = moment(dateStr, DateService.WEATHER_API_DATE_FORMAT);
    return m.format('dddd');
  }
}