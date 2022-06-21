import * as React from 'react';
import URLText from '@/components/Common/URlText';
import {URL} from '@/constants';

export default function CommunityButtons() {
  return (
    <>
      <URLText text={'Report Issue'} url={URL.issues} />
      <URLText text={'Request Feature'} url={URL.requestFeature} />
      <URLText text={'Forums'} url={URL.Forums} />
    </>
  );
}
