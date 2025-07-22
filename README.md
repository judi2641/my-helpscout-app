# Help Scout Developer Platform — Sidebar App Template

This is a basic starter template for building a Help Scout Sidebar App. It uses [Vite](https://vitejs.dev) and React, and it comes with Help Scout's UI Kit and JavaScript SDK pre-installed.


## 🚀 Getting Started

1. Go to https://github.com/helpscout/app-template and click the green **Use this template** button → **Create a new repository**. Give your new repo a name, and save it.
2. Go to https://codesandbox.io/ and create an account if you don't have one (you can login with your Github account.)
3. On CodeSandbox, click on Import repository and select the repository you created in step 1.
> The first time you open your repo in CodeSandbox it will take a couple of minutes to build a container and install dependencies. Once that's done, you'll see the code editor on the left and a preview panel of your app on the right.
4. Hover on the preview panel and click on the Show navigator icon on the top right. This will reveal the URL of your environment. Copy this URL, you'll need it in a few minutes.

5. On Help Scout, login as an Administrator or Account owner and navigate to **Manage** -> **Apps**
6. Click the Create button at the top (or click [here](https://secure.helpscout.net/apps/create/))
7. Click on **Create App**, fill out the form as described below, and click Save:
- App Name: anything you want
- Callback URL: the URL of your environment you copied previously
- Secret Key: any text value
- Mailboxes: select the mailboxes where you want this app to be available in
8. Go to one of the Mailboxes you selected in the previous step and open a conversation. You'll see an app container with your app's title and string of query parameters, which is Codesandbox's (very confusing) initial preview confirmation. Focus the container and either use `Tab` navigation or search for the text Preview to get access to [this button](https://github.com/user-attachments/assets/16d07470-37d3-42d0-b85d-0a21d6c000c6), then hit `Enter`. You should now see your app rendered.
9. Now you can start making changes to your app in CodeSandbox and you should see those changes reflected immediately in Help Scout.




## 🛠️ Resources

- [UI Kit Storybook](https://ui-kit-bqr.pages.dev/)
- [JavaScript SDK Documentation](https://developer.helpscout.com/apps/javascript-sdk/)
