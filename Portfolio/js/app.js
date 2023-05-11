

			let camera, sizes,  container, scene, renderer, clock;

			let uniforms1, uniforms2;

			init();
			animate();

			function init() {

				const container = document.getElementById( 'container-canvas' );

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 3000 );
				camera.position.z = 4;

				scene = new THREE.Scene();

				clock = new THREE.Clock();


				
				const geometry = new THREE.BoxGeometry( 1.3, 1.3, 1.3 );

				uniforms1 = {
					'time': { value: 1.0 }
				};

				uniforms2 = {
					'time': { value: 1.0 },
					'colorTexture': { value: new THREE.TextureLoader().load( 'img/disturb.jpg' ) }
				};

				uniforms2[ 'colorTexture' ].value.wrapS = uniforms2[ 'colorTexture' ].value.wrapT = THREE.RepeatWrapping;

				const params = [
					[ 'fragment_shader1', uniforms1 ],
					
				];

				for ( let i = 0; i < params.length; i ++ ) {

					const material = new THREE.ShaderMaterial( {

						uniforms: params[ i ][ 1 ],
						vertexShader: document.getElementById( 'vertexShader' ).textContent,
						fragmentShader: document.getElementById( params[ i ][ 0 ] ).textContent

					} );

					const mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = i - ( params.length - 1 ) / 2;
					mesh.position.y = i % 3 - 0.5;
					scene.add( mesh );

				}

				renderer = new THREE.WebGLRenderer({ alpha: true });
                renderer.setClearColor( 0x000000, 0 ); // de standaard kleur
				renderer.setPixelRatio( window.devicePixelRatio );
				container.appendChild( renderer.domElement );

				
				onWindowResize();
				
				 

				window.addEventListener( 'resize', onWindowResize, false );

          	// Positie instellen, rotatie voor shader van de Cube 3d
				scene.rotation.set(0, 1.88, 0)
				camera.position.set(0, -0.5, 5)


				
    
			//ScrollTrigger voor shader Cube 3d 		
				let intT = gsap.timeline({
			
					scrollTrigger: {
						trigger: ".wrapper",
						start: "0.5% top",
						end: "bottom bottom",
						ease: "power4.out",
						scrub: 1,
						
					}
				})

				// intT.from(camera.position, { x: -3.5, },0);
				intT.to(scene.rotation, {y: - Math.PI * 6,});
			}

			
		  
			  let intP = gsap.timeline({
			
				scrollTrigger: {
					trigger: ".home",
				    start: "50.5% center", 
				    end: "51% center",					
					ease: "power4.out",
					scrub: 1,
					
				}
			})
			intP.from(camera.position, { x: -2.5, });
			


			function onWindowResize() {
				const sizes = {
					width: window.innerWidth,
					height: window.innerHeight,
				};

				sizes.width = window.innerWidth;
				sizes.height = window.innerHeight;

				camera.aspect = sizes.width / sizes.height;
				camera.updateProjectionMatrix();

				renderer.setSize( sizes.width, sizes.height );

			}


			function animate() {

				requestAnimationFrame( animate );

				render();

			}


			function render() {

				const delta = clock.getDelta();

				uniforms1[ 'time' ].value += delta * 5;
				uniforms2[ 'time' ].value = clock.elapsedTime;

				for ( let i = 0; i < scene.children.length; i ++ ) {

					const object = scene.children[ i ];

					object.rotation.y += delta * 0.15 * ( i % 2 ? 1 : - 1 );

				}

				renderer.render( scene, camera );

			}
