import React, {ReactNode} from 'react';
import clsx from 'clsx';
import Tag from "@theme/Tag";
import tagStyles from '@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css';

type SimpleTagListProps = {
  permalink: string;
  tags: string[];
};

export default function SimpleTagList({tags, permalink = '/blog/tags/'}: SimpleTagListProps): JSX.Element {
  return (
    <ul className={clsx(tagStyles.tags, 'padding--none', 'margin-left--sm')}>
      {tags.map(tag => (
        <li key={permalink + tag} className={tagStyles.tag}>
          <Tag name={tag} permalink={permalink + tag.toLowerCase()} />
        </li>
      ))}
    </ul>
  );
}