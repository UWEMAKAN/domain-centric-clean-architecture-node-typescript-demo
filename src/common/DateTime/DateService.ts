import IDateService from "./IDateService";

class DateService implements IDateService {
  public GetDate(): Date {
    return new Date();
  }
}

export default DateService;
