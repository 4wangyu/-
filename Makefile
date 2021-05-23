zip:
	rm douban.zip
	zip douban.zip src/*

firefox:
	cd src; zip douban.zip ./*; mv douban.zip ..
