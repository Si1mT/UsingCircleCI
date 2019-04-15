# getting started

1. fork git repository
1. git clone your fork
1. install npm packages `npm install`
1. testing:
   - unit ([jest](https://jestjs.io/)): `npm run test`
   - lint ([eslint](https://eslint.org/)): `npm run lint`
1. create merge request from your fork

# tasks

> * Check [examples.js](./examples.js) for code usage examples
> * Tasks can be made in any order

 * <2p> make each task as a separate commit(s), use meaningful commit messages
    - one task can be multiple commits
    - but one commit should not be more than one task
 * <1p> list tasks in merge request body, each task in separate line with commit(s) sha1 (if any commits)
    - example:
       - [x] short description of task, commit-sha1
       - [x] some more fix that is done, 97273b2
       - [ ] and one more bug fix
 * <1p> fix linting errors and do not make new errors in future 
 * <1p> update code style rules in this project:
    - use 1 tab for indent
    - use `"` instead of `'`
 * <1p> disable [console](https://developer.mozilla.org/en-US/docs/Web/API/Console) usage with eslint, add line/file based exceptions where it is used
 * <4p> add project ci pipeline, it should use node v10 and check 3 things:
    - dependencies install
    - linter
    - unit testing
 * <1p> add git hook to run linter locally each time you commit new code (you can use [husky](https://www.npmjs.com/package/husky) or any tool you like)
 * <1p> enable linting in [examples.js](./examples.js)
 * <1p> use snapshot testing to test `src/user.js` (use ids 1, 56 and 1345)
 * <1p> use string as input(id) for `src/user.js` - test that exception is given
 * <1p> write implementation (`capitalize.js`) for this test (you can use npm packages in `capitalize.js`)
```js
// src/capitalize.spec.js
const capitalize = require('./capitalize');

describe('sum', () => {
  it('triin => Triin', () => {
    expect(capitalize('triin')).toBe("Triin");
  });
  it('error - bad input', () => {
    expect(() => {
      capitalize({ "word": 'cat' });
    }).toThrow(/bad input/);
  });
});
```
 * <1p> test `src/randomPlus.js` while mocking `src/random.js` (check from mock that `random` params was 1 and 99)
 * <1p> make any random improvment
    - **NB:** this task is optional