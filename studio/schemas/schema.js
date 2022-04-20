/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom schemas

import blog from './documents/blog';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blog]),
});
