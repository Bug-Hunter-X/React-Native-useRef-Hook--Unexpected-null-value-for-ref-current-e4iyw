# React Native useRef Hook: Unexpected null value for ref.current

This repository demonstrates a common issue encountered when using the `useRef` hook in React Native: accessing `ref.current` and getting `null` even after the component has mounted.  The example shows how to reproduce this problem and provides a solution to resolve it.  The issue typically arises due to asynchronous operations or timing issues where the ref hasn't been populated before the access attempt.

## Reproducing the Bug

Clone the repository and run the `useRefNullBug.js` example. You will observe that the console logs a `null` value instead of the expected object reference. 

## Solution

The `useRefNullSolution.js` file demonstrates a solution.  This approach uses the `useEffect` hook to check if the ref is populated. If not, it waits until it is before proceeding.  Alternative solutions might involve using a state variable to track ref availability or optimizing asynchronous operations.