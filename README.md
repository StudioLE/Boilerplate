# Boilerplate [![Build Status](https://travis-ci.com/StudioLE/Boilerplate.svg?branch=master)](https://travis-ci.com/StudioLE/Boilerplate)

A boilerplate static website compiled with [Hugo](https://gohugo.io), continuous integration testing on [Travis CI](https://travis-ci.com) with [TestCafe](https://devexpress.github.io/testcafe), and automated deployment to [GitHub Pages](https://pages.github.com) and [Amazon S3](https://aws.amazon.com/s3).

## Usage

### `npm start` and `npm run build`

Copies the required js, css, and font files from `node_modules` to `resources/assets/vendor` and `static/assets/fonts` using [Gulp](https://gulpjs.com/).

Builds the website with [Hugo](https://gohugo.io) for the `production` environment.

### `npm test`

Run end-to-end tests with [TestCafe](https://devexpress.github.io/testcafe)

### `npm run server`

Builds the website with [Hugo](https://gohugo.io) and serves it on [localhost:1313](http://localhost:1313) with the `development` environment and live reload.

### `npm run clean`

Remove generated `resources/assets/vendor`, `static/assets/fonts`, and `public` directories.

### `npm run deploy` and `npm run deploy-dry`

Deploy the website to [Amazon S3](https://aws.amazon.com/s3) with appropriate `cache-control` headers.

### `npm run invalidate`

Invalidate the [CloudFront](https://aws.amazon.com/cloudfront) edge caches.

## Setup

### Deployments

Deployment is completed automatically by [Travis CI](https://travis-ci.com) on successful build of the `develop` or `master` branch.

Add the `HUGO_VERSION` key with a value of `0.68.3` to the [Travis CI Environment Variables](https://travis-ci.com/github/StudioLE/Boilerplate/settings) for your repo.

#### [GitHub Pages](https://pages.github.com) from `develop` branch

Set the domain for GitHub Pages to use using the `fqdn` variable in `.travis.yml`.

Create a `CNAME` record pointing from the domain to `<user>.github.io`.

Create an empty `gh-pages` branch on GitHub.

```
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing"
git push origin gh-pages
git checkout master
```
Create a [GitHub Personal Access Token](https://github.com/settings/tokens) and add it to the `GITHUB_TOKEN` key in the [Travis CI Environment Variables](https://travis-ci.com/github/StudioLE/Boilerplate/settings) for your repo.

For more details refer to:
[Hugo Documentation](https://gohugo.io/hosting-and-deployment/hosting-on-github/#deployment-of-project-pages-from-your-gh-pages-branch)
[GitHub Pages Documentation](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

#### [Amazon S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront) from `master` branch

Create an S3 Bucket for the site.

Enable static website hosting on the bucket with `index.html` as the index document.

Add a Bucket Policy.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::yourbucketname/*"
        }
    ]
}
```

Create a new CloudFront distribution.

Set the origin domain name to point to the S3 static website - not the S3 bucket itself.

```
http://yourbucketname.s3-website-eu-west-1.amazonaws.com
```

Add the CloudFront Distribution ID to `invalidate` in `package.json` and `cloudFrontDistributionID` in `config.yml`.

Set the `CNAME` for your domain to point to the CloudFront Distribution Domain.

Create an IAM policy.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::yourbucketname"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:*Object",
            "Resource": "arn:aws:s3:::yourbucketname/*"
        }
    ]
}
```

Attach the policy to an IAM user for Travis to use.

Add the `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_REGION` keys to the [Travis CI Environment Variables](https://travis-ci.com/github/StudioLE/Boilerplate/settings) for your repo.
