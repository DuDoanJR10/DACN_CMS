import type { RootState, AppDispatch } from './index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
