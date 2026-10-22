import Dashboard from './screens/Screen19_2';
import Evidence from './screens/Screen18_2';
import Observation from './screens/Screen18_220';
import Metadata from './screens/Screen18_771';
import Revision from './screens/Screen18_1187';
import Assignments from './screens/Screen142_632';
import CreateAssignment from './screens/Screen142_1190';
import Assigned from './screens/Screen142_1748';
import InProgress from './screens/Screen142_2306';

export const navigation = {
  Dashboard: '/dashboard',
  'Review Queue': '/review',
  'Correction Queue': '/corrections',
  'Expert Referrals': '/referrals',
  'Quarantine Queue': '/quarantine',
  'Decision History': '/history',
  'Evidence Viewer': '/evidence',
  'Fieldwork Assignments': '/assignments',
};
export const screens = {
  '/dashboard': Dashboard,
  '/evidence': Evidence,
  '/evidence/observation': Observation,
  '/evidence/metadata': Metadata,
  '/evidence/revision': Revision,
  '/assignments': Assignments,
  '/assignments/new': CreateAssignment,
  '/assignments/assigned': Assigned,
  '/assignments/in-progress': InProgress,
};
export const pending = {
  '/review': 'Review Queue', '/corrections': 'Correction Queue',
  '/referrals': 'Expert Referrals', '/quarantine': 'Quarantine Queue',
  '/history': 'Decision History', '/profile': 'My Profile',
  '/demo': 'Select Demo Role',
};

import Screen19_302 from './screens/Screen19_302';
import Screen19_785 from './screens/Screen19_785';
import Screen19_1016 from './screens/Screen19_1016';
import Screen20_2 from './screens/Screen20_2';
import Screen20_186 from './screens/Screen20_186';
import Screen20_362 from './screens/Screen20_362';
import Screen20_559 from './screens/Screen20_559';
import Screen20_759 from './screens/Screen20_759';
import Screen20_953 from './screens/Screen20_953';
import Screen21_2 from './screens/Screen21_2';
import Screen21_167 from './screens/Screen21_167';
import Screen21_351 from './screens/Screen21_351';
import Screen21_601 from './screens/Screen21_601';
import Screen21_834 from './screens/Screen21_834';
import Screen21_1035 from './screens/Screen21_1035';
import Screen21_1216 from './screens/Screen21_1216';
import Screen41_1062 from './screens/Screen41_1062';
import Screen39_1733 from './screens/Screen39_1733';
import Screen39_2225 from './screens/Screen39_2225';
import Screen39_2431 from './screens/Screen39_2431';
import Screen39_2635 from './screens/Screen39_2635';
import Screen39_2839 from './screens/Screen39_2839';
import Screen39_3042 from './screens/Screen39_3042';
import Screen39_3245 from './screens/Screen39_3245';
import Screen71_97 from './screens/Screen71_97';
import Screen36_3 from './screens/Screen36_3';
import Screen142_2864 from './screens/Screen142_2864';
import Screen142_3422 from './screens/Screen142_3422';
import Screen142_3980 from './screens/Screen142_3980';
import Screen142_4538 from './screens/Screen142_4538';
import Screen142_5096 from './screens/Screen142_5096';
import Screen150_479 from './screens/Screen150_479';
import Screen150_682 from './screens/Screen150_682';
import Screen150_885 from './screens/Screen150_885';
import Screen150_1088 from './screens/Screen150_1088';
import Screen150_1291 from './screens/Screen150_1291';
import Screen150_1494 from './screens/Screen150_1494';
Object.assign(screens, {
 '/review': Screen19_302,
 '/review/observation': Screen19_785,
 '/review/verify': Screen19_1016,
 '/review/flag': Screen20_2,
 '/review/correction': Screen20_186,
 '/corrections': Screen20_362,
 '/corrections/detail': Screen20_559,
 '/corrections/compare': Screen20_759,
 '/corrections/approve': Screen20_953,
 '/corrections/reject': Screen21_2,
 '/referrals/new': Screen21_167,
 '/referrals': Screen21_351,
 '/quarantine': Screen21_601,
 '/quarantine/detail': Screen21_834,
 '/quarantine/decide': Screen21_1035,
 '/history': Screen21_1216,
 '/profile': Screen41_1062,
 '/review/flagged': Screen39_1733,
 '/corrections/requested': Screen39_2225,
 '/corrections/approved': Screen39_2431,
 '/corrections/applied': Screen39_2635,
 '/quarantine/ingested': Screen39_2839,
 '/quarantine/retry': Screen39_3042,
 '/quarantine/retried': Screen39_3245,
 '/demo': Screen71_97,
 '/login': Screen36_3,
 '/assignments/submitted': Screen142_2864,
 '/assignments/completed': Screen142_3422,
 '/assignments/edit': Screen142_3980,
 '/assignments/cancel': Screen142_4538,
 '/assignments/cancelled': Screen142_5096,
 '/assignments/ASG-002': Screen150_479,
 '/assignments/ASG-003': Screen150_682,
 '/assignments/ASG-004': Screen150_885,
 '/assignments/ASG-005': Screen150_1088,
 '/assignments/ASG-006': Screen150_1291,
 '/assignments/ASG-007': Screen150_1494,
});
Object.keys(pending).forEach(path=>delete pending[path]);
export const designRoutes = {"/review":"19:302","/review/observation":"19:785","/review/verify":"19:1016","/review/flag":"20:2","/review/correction":"20:186","/corrections":"20:362","/corrections/detail":"20:559","/corrections/compare":"20:759","/corrections/approve":"20:953","/corrections/reject":"21:2","/referrals/new":"21:167","/referrals":"21:351","/quarantine":"21:601","/quarantine/detail":"21:834","/quarantine/decide":"21:1035","/history":"21:1216","/profile":"41:1062","/review/flagged":"39:1733","/corrections/requested":"39:2225","/corrections/approved":"39:2431","/corrections/applied":"39:2635","/quarantine/ingested":"39:2839","/quarantine/retry":"39:3042","/quarantine/retried":"39:3245","/demo":"71:97","/login":"36:3","/assignments/submitted":"142:2864","/assignments/completed":"142:3422","/assignments/edit":"142:3980","/assignments/cancel":"142:4538","/assignments/cancelled":"142:5096","/assignments/ASG-002":"150:479","/assignments/ASG-003":"150:682","/assignments/ASG-004":"150:885","/assignments/ASG-005":"150:1088","/assignments/ASG-006":"150:1291","/assignments/ASG-007":"150:1494"};

