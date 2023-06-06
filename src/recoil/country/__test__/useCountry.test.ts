import { describe, it, expect, beforeEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { RecoilRoot, useSetRecoilState } from 'recoil';

import useCountry from '../useCountry';
import countryAtom from '../atom';

const NEW_COUNTRY = '대한민국';

describe('useCountry 검증', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useSetRecoilState(countryAtom), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current({ bucketlist: [], completed: [], liked: [] });
    });
  });

  it('초기값으로 bucketlist, completed 그리고 liked에 대해 빈 배열을 가지고 있어야 한다.', () => {
    const { result } = renderHook(() => useCountry(), {
      wrapper: RecoilRoot,
    });

    expect(result.current.country).toEqual({ bucketlist: [], completed: [], liked: [] });
  });

  it('특정 나라 그룹에 새로운 나라를 추가할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useCountry(), {
      wrapper: RecoilRoot,
    });

    expect(result.current.country.bucketlist).toHaveLength(0);

    act(() => {
      result.current.addCountry('bucketlist', NEW_COUNTRY);
    });

    expect(result.current.country.bucketlist).toHaveLength(1);
  });

  it('특정 나라 그룹에 존재하는 나라를 제거할 수 있어야 한다.', () => {
    const { result } = renderHook(() => useCountry(), {
      wrapper: RecoilRoot,
    });

    expect(result.current.country.bucketlist).toHaveLength(0);

    act(() => {
      result.current.addCountry('bucketlist', NEW_COUNTRY);
    });

    expect(result.current.country.bucketlist).toHaveLength(1);

    act(() => {
      result.current.deleteCountry('bucketlist', NEW_COUNTRY);
    });

    expect(result.current.country.bucketlist).toHaveLength(0);
  });

  it('특정 나라 그룹에서 다른 나라 그룹으로 나라를 이동시킬 수 있어야 한다.', () => {
    const { result } = renderHook(() => useCountry(), {
      wrapper: RecoilRoot,
    });

    act(() => {
      result.current.addCountry('bucketlist', NEW_COUNTRY);
    });
    expect(result.current.country.bucketlist).toHaveLength(1);

    act(() => {
      result.current.moveCountry('bucketlist', 'completed', NEW_COUNTRY);
    });
    expect(result.current.country.bucketlist).toHaveLength(0);
    expect(result.current.country.completed).toHaveLength(1);
  });
});
