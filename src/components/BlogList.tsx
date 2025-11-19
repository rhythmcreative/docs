import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

type BlogPost = {
    title: string;
    permalink: string;
    date: string;
    description: string;
};

// Placeholder data - in a real app this would come from a plugin or prop
const RecentPosts: BlogPost[] = [
    {
        title: 'Welcome to the Tech Blog',
        permalink: '/blog/welcome',
        date: '2023-10-27',
        description: 'This is the first post on our new tech blog. Stay tuned for more updates!',
    },
    {
        title: 'Understanding Docusaurus',
        permalink: '/blog/understanding-docusaurus',
        date: '2023-10-26',
        description: 'A deep dive into how Docusaurus works and how to customize it.',
    },
    {
        title: 'React Hooks Guide',
        permalink: '/blog/react-hooks',
        date: '2023-10-25',
        description: 'Everything you need to know about React Hooks for modern web development.',
    },
];

function BlogPostCard({ title, permalink, date, description }: BlogPost) {
    return (
        <div className="col col--4 margin-bottom--lg">
            <div className="card h-100">
                <div className="card__header">
                    <div className="avatar margin-bottom--sm">
                        <div className="avatar__intro">
                            <div className="avatar__subtitle">
                                <small className="text--secondary">{date}</small>
                            </div>
                        </div>
                    </div>
                    <Heading as="h3" className="margin-bottom--sm">
                        <Link to={permalink} className="text--primary">
                            {title}
                        </Link>
                    </Heading>
                </div>
                <div className="card__body">
                    <p className="text--secondary">{description}</p>
                </div>
                <div className="card__footer">
                    <Link to={permalink} className="button button--link padding-left--none">
                        Read Article &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function BlogList(): React.ReactNode {
    return (
        <section className="margin-top--xl margin-bottom--xl">
            <div className="container">
                <Heading as="h2" className="text--center margin-bottom--lg">
                    Latest Insights
                </Heading>
                <div className="row">
                    {RecentPosts.map((props, idx) => (
                        <BlogPostCard key={idx} {...props} />
                    ))}
                </div>
                <div className="text--center margin-top--lg">
                    <Link to="/blog" className="button button--outline button--secondary button--lg">
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
