// ensure that all the custom hooks follow the same structure, even if they don't dispatch anything back to state
// ex: const [location, setLocation] = useLocation()
export type StateHookTuple<I> = [I, (val: I) => void];