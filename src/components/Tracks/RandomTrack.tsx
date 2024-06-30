import { LiaRandomSolid } from 'react-icons/lia';

import { Card } from '@/components/UI/Card';
import { Error } from '@/components/UI/Error';
import { Button } from '@/components/UI/Button';
import { LittleTrack } from '@/components/Tracks/Track';
import { PageLoading } from '@/components/UI/Loading';

import { useGetRandomTrackQuery } from '@/redux/endpoints/trackEndpoints';

export const RandomTrack = () => {
  const { data: track, isLoading, error, refetch } = useGetRandomTrackQuery();

  if (isLoading) return <PageLoading />;
  if (error) return <Error error={error} />;

  return (
    track && (
      <Card className="p-1.5 md:p-1.5 gap-0 md:gap-0">
        <div className="flex justify-between">
          <h4 className="px-2 pt-2">Random track</h4>
          <Button variant="ghost" size="icon" aria-label="change random track" onClick={refetch}>
            <LiaRandomSolid />
          </Button>
        </div>
        <LittleTrack track={track} tracks={[track]} index={0} />
      </Card>
    )
  );
};
