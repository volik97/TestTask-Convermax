export type Schedule = {
   result: {
       minutes: string,
       hours: string,
       dayOfMonth: string,
       months: string,
       dayOfWeek: string,
       years: string,
   },
    settings: {
       custom: boolean;
       valid: boolean;
    }
}