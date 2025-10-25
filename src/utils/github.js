// GitHub API utilities
const GITHUB_USERNAME = 'dipeshkumar123';
const GITHUB_API_BASE = 'https://api.github.com';

export const fetchGitHubProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
    if (!response.ok) throw new Error('Failed to fetch repositories');
    const repos = await response.json();
    
    // Filter out forks and sort by stars, then by last updated
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => {
        // First sort by stars (descending)
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // Then sort by updated date (descending)
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
      .slice(0, 6); // Limit to 6 repositories
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

export const fetchGitHubStats = async () => {
  try {
    const [profile, repos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos()
    ]);

    if (!profile) return null;

    // Calculate total stars across all repos
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    
    // Get unique languages
    const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];

    return {
      profile,
      totalRepos: profile.public_repos,
      totalStars,
      followers: profile.followers,
      following: profile.following,
      languages,
      joinDate: new Date(profile.created_at).getFullYear()
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
};

// Helper function to format repository data for display
export const formatRepoForDisplay = (repo) => ({
  title: repo.name,
  description: repo.description || 'No description available',
  tags: [repo.language, ...(repo.topics || [])].filter(Boolean),
  url: repo.html_url,
  homepage: repo.homepage,
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  language: repo.language,
  updatedAt: repo.updated_at
});