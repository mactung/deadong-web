import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/index.scss"

import CMS from "netlify-cms-app"
import cloudinary from "netlify-cms-media-library-cloudinary"
CMS.registerMediaLibrary(cloudinary)
