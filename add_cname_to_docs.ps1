# To run:
# This script takes 1 argument, the CNAME value (ie. crossroads.lioncross.dev)
# This purpose of this script is to add CNAME to docs directory
# In package.json add "build": "quasar build && powershell -command \"./add_cname_to_docs.ps1 your_website.com\""

$cname = $args[0]
New-Item -Path ./docs -Name "CNAME" -ItemType "file" -Value $cname