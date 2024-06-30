import { Card } from '@/components/UI/Card';
import { Grid } from '@/components/UI/Grid';
import { TitleMain } from '@/components/UI/Title';
import { TagCard } from '@/components/Tags/TagCard';

import { TAGS } from '@/constants/constants';

export const Tags = () => {
  return (
    <Card>
      <TitleMain>Choose Tag and Dive into the World of Sounds</TitleMain>
      <Grid>
        {TAGS.map((tag, index) => {
          return <TagCard tag={tag} key={index} />;
        })}
      </Grid>
    </Card>
  );
};
