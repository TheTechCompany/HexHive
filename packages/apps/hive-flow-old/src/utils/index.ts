import * as staffUtils from './staff';
import * as jobUtils from './job';
import * as plantUtils from './plant';
import * as quoteUtils from './quotes';
import * as authUtils from './auth';
import * as userUtils from './user';
import * as scheduleUtils from './schedule';
import * as profileUtils from './profile';
import * as plannerUtils from './planner';
import * as dateUtils from './dates';

export default {
  dates: dateUtils,
  planner: plannerUtils,
  profile: profileUtils,
  schedule: scheduleUtils,
  auth: authUtils,
  staff: staffUtils,
  job: jobUtils,
  plant: plantUtils,
  quote: quoteUtils,
  user: userUtils
}
