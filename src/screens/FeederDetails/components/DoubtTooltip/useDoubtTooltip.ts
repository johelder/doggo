import { useState } from 'react';

export function useDoubtTooltip() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  function handleToggleTooltip() {
    setIsTooltipVisible(prevState => !prevState);
  }

  return { handleToggleTooltip, isTooltipVisible };
}
