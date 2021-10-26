# ARINCO
Software de gestión de EPP's y registros de ingresos y salidas para la empresa Estructuras ARINCO

25/10/2021 La DB de pruebas para el proyecto es database1.sql

- Tener en cuenta los comandos Git para la manipulacion del proyecto, POR FAVOR.

- git config --list -> Para listar todas las configuraciones (locales y globales) de GIT en el PC.
- git status -> Para listar todos los archivos modificados localmente. (para revisar que se va a modificar antes de subirlo.)
- git clone ***enlace del proyecto GitHub** -> Para clonar el repositorio. (Util cuando se presentan problemas con el proyecto, se elimina la carpeta en el pc y se ejecuta el comando.)
- git add -A -> Para agregar todos los cambios de todos los archivos a git (Tambien sirve: "git add .").
- git add ***nombre y ruta del archivo (se pueden ver en la lista por git status)** -> Para agregat cada uno de los cambios de los archivos en particular por separado a git.
- git commit -m '***mensaje**' -> Para comentar los archivos agregados con git add.
- git pull -> Para actualizar todos los archivos a su ultima version antes de subir algun cambio.
- git push -> Para subir todas las modificaciones agregadas y comentadas en git a la carpeta del proyecto en GitHub.

- En el explorador de archivos de windows, en la carpeta de trabajo, click derecho -> Git Bash Here. Para ejecutar la consola de Git en la carpeta.

- En VScode, Terminal -> New terminal. Asegurarse que se esta ubicado en la ruta de la carpeta de trabajo, si no se ha iniciado ningun comando git antes en la carpeta, ejecurar: git init. Si se ha trabajado antes con git en la carpeta, ejecutar los comandos anteriores segun el caso.