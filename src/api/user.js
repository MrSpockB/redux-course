export const loadUser = () => {
  console.log('[API] loading user...');
  return new Promise(resolve => setTimeout(() => resolve({authenticated: true, name: 'Juanito'}), 1000));
};