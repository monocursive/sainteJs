import {Polls} from '../polls';

export default function () {
  if (!Polls.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const title = `This is the post title: ${lc}`;
      const content = `Post ${lc}'s content is great!`;
      Polls.insert({title, content});
    }
  }
}
