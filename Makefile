.PHONY: build push pull run build-android
build:
	docker build -t unity.servehttp.com:5000/double-check-app:master .
push:
	docker push unity.servehttp.com:5000/double-check-app:master
pull:
	docker pull unity.servehttp.com:5000/double-check-app:master
run:
	docker run unity.servehttp.com:5000/double-check-app:master
build-android:
	./build-android.sh


