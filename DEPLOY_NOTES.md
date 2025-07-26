# Manual Deploy Notes

To clear and reseed projects in production before deployment:

```bash
RAILS_ENV=production SECRET_KEY_BASE=dummydummydummydummydummy rails console

Project.delete_all
exit

then reseed:
RAILS_ENV=production SECRET_KEY_BASE=dummydummydummydummydummy rails db:seed
