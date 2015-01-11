preview = {
	renderer: undefined
	camera: undefined
	scene: undefined
	mesh: undefined
	init: ->
		@renderer = new THREE.WebGLRenderer()
		@renderer.setSize( window.innerWidth, window.innerHeight )
		document.body.appendChild( @renderer.domElement )

		#

		@camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 )
		@camera.position.z = 400

		@scene = new THREE.Scene()

		geometry = new THREE.BoxGeometry( 200, 200, 200 )
		material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 2 } )

		@mesh = new THREE.Mesh( geometry, material )
		@scene.add( @mesh )

		#

		window.addEventListener( 'resize', @onWindowResize, false )

	onWindowResize: ->
		@camera.aspect = window.innerWidth / window.innerHeight
		@camera.updateProjectionMatrix()

		@renderer.setSize( window.innerWidth, window.innerHeight )


	animate: ->
		requestAnimationFrame( @animate )

		@mesh.rotation.x += 0.005
		@mesh.rotation.y += 0.01

		@renderer.render( @scene, @camera )
}

module.exports = preview
