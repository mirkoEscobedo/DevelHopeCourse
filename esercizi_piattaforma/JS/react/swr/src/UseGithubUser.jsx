import useSWR from 'swr';
export function useGithubuser(username) {
  const shouldFetch = username
    ? `https://api.github.com/users/${username}`
    : null;

  const { userData, error, isLoading, mutate } = useSWR(shouldFetch, {
    revalidateOnFocus: false,
  });

  return { userData, isLoading, error, refetch: mutate };
}
