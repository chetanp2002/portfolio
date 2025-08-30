# Deploying Your Portfolio to Hostinger

## Files to Upload

After running `npm run build`, you will have a static export in the `/Users/sathvik/Desktop/sathvik-portfolio/out/` directory. This contains all the files you need to upload to Hostinger.

## Upload Instructions

1. **Prepare your subdomain in Hostinger**
   - Create a subdomain like `portfolio.aivara.in` in your Hostinger control panel
   - Note the directory assigned to this subdomain (usually something like `/public_html/portfolio/`)

2. **Upload your files**
   - Upload ALL files and folders from the `/Users/sathvik/Desktop/sathvik-portfolio/out/` directory to your subdomain's directory on Hostinger
   - Make sure to maintain the exact file structure

3. **Important files to check**
   - Ensure `index.html` is in the root of your upload directory
   - Check that all the static assets in the `_next` folder are uploaded correctly

## Verifying Your Deployment

After uploading, visit your subdomain (e.g., `portfolio.aivara.in`) to verify everything is working correctly.

## Troubleshooting

If your site doesn't display properly:
- Ensure all files were uploaded successfully
- Check that the subdomain's DNS settings have propagated (can take up to 24 hours)
- Verify the file permissions (typically 644 for files and 755 for directories)
- If images or styles are missing, check the browser console for path errors

## Additional Resources

- If you need to update your site in the future, run `npm run build` again and re-upload the contents of the `out` directory
- For custom domain configuration help, refer to Hostinger's documentation
