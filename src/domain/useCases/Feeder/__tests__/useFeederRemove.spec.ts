import { act, renderHook, waitFor } from 'test-utils';

import { FeederRepository } from '@data';

import { useFeederRemove } from '..';

describe('useFeederRemove', () => {
  it('should call onSuccess function when request finish with success', async () => {
    jest.spyOn(FeederRepository, 'remove').mockResolvedValue();

    const mockedOnSuccess = jest.fn();

    const { result } = renderHook(() =>
      useFeederRemove({ onSuccess: mockedOnSuccess }),
    );

    act(() => result.current.removeFeeder('mocked-feeder-id'));

    await waitFor(() => expect(result.current.isError).toBeFalsy());
    await waitFor(() => expect(mockedOnSuccess).toHaveBeenCalled());
  });

  it('should call onError function with a message', async () => {
    jest
      .spyOn(FeederRepository, 'remove')
      .mockRejectedValue(new Error('mocked error message'));

    const mockedOnError = jest.fn();

    const { result } = renderHook(() =>
      useFeederRemove({ onError: mockedOnError }),
    );

    act(() => result.current.removeFeeder('mocked-feeder-id'));

    await waitFor(() => expect(result.current.isError).toBeTruthy());
    await waitFor(() =>
      expect(mockedOnError).toHaveBeenCalledWith('mocked error message'),
    );
  });
});
