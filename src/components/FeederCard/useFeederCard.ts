import { useState } from 'react';

export function useFeederCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleToggleCollapseSession() {
    setIsCollapsed(prevState => !prevState);
  }

  return { isCollapsed, handleToggleCollapseSession };
}
