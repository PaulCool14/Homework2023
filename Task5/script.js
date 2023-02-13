time = parseInt(prompt('Write time'))
minutes = time/60
hours = parseInt(minutes/60)
alert(hours+' hors '+parseInt(minutes-hours*60)+" minutes")