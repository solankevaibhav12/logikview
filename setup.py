from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in logikview/__init__.py
from logikview import __version__ as version

setup(
	name="logikview",
	version=version,
	description="Logikview App",
	author="Dexciss Technology",
	author_email="vsolanke@dexcissmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
