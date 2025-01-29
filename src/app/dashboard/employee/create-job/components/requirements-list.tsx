import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface RequirementsListProps {
  requirements: string[];
  setRequirements: React.Dispatch<React.SetStateAction<string[]>>;
}

export function RequirementsList({
  requirements,
  setRequirements,
}: RequirementsListProps) {
  const [newRequirement, setNewRequirement] = useState('');

  const addRequirement = () => {
    if (newRequirement.trim() !== '') {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Requirements</h3>
      <ul className="list-disc pl-5 space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{req}</span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeRequirement(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <Input
          placeholder="Add a requirement"
          value={newRequirement}
          onChange={(e) => setNewRequirement(e.target.value)}
        />
        <Button type="button" onClick={addRequirement}>
          Add
        </Button>
      </div>
    </div>
  );
}
