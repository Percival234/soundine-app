import { Card } from '@/components/UI/Card';
import { TitleMain } from '@/components/UI/Title';
import { SettingsForm } from '@/components/Settings/SettingsForm';

export const Settings = () => {
  return (
    <Card className="items-center bg-white dark:bg-zinc-900">
      <TitleMain>Customize Your Musical Space</TitleMain>
      <SettingsForm />
    </Card>
  );
};
