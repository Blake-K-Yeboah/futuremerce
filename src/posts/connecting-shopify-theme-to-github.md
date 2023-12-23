---
title: Connecting your Shopify theme to GitHub
slug: connecting-shopify-theme-to-github
excerpt: Connecting your store’s theme to GitHub can have many benefits including improved collaboration and a superior developer experience. Lets take a look at how the setup works and how it can help your store.
date: "2023-12-18"
category: Development
---

Connecting your store’s code to GitHub can have many benefits.

For one, your store will have version control meaning it very easy to keep track of changing and revert back to old versions in case anything goes wrong.

Additionally, it can make setting up staging environments easier especially when you want to publish changes live.

It also improved your developer experience significantly, by improving collaboration and making it easier to track who’s working on what.

With these benefits in mind, let take a look at how easy it is to setup.

### Setup GitHub account and repository

If you don’t already have a GitHub account, you’re going to need to create one.

Once you’ve setup your account, create a repository dedicated to your store. This is where your code will go.

Once you’ve setup your repository, you need to export your currently live theme and upload the code to your GitHub repo.

With the repository setup, you can now head over to your Shopify dashboard to setup the connection.

### Connect Shopify theme to GitHub

If you head over to your themes, you’ll want to add a new theme.

Click on the add theme button, this should open a dropdown with “Connect from GitHub” as an option.

After following the prompts, you should be able to link the new theme to your GitHub repository you previously created.

You’ve now connected your theme to GitHub 🙂

You’ll want to do a quick test through the preview mode to ensure the theme displays correctly and then you’re ready to set it live.

### Branch Structure

There are many different ways of structuring your repository for future ease of development.

We’d recommend three branches:

-   **Master** - This is your live production branch
-   **Staging** - This is your staging branch, use it to test new features prior to going live.
-   **Feature branches** - This is optional, however it can helpful to use a seperate branch for building out each feature (especially, if you’ve got multiple developers working at the same time)

Thanks to version control, its a very simple process to merge branches, and they will automatically update in your shopify themes.

### Conclusion

Thanks for reading this article.

We hope you’ve found this development tip helpful.

This is one the many things, our experienced team of engineers could setup for your store.

If you’re interested, feel free to [get in touch](/contact) with us, we’d love to help out.

Adios!
