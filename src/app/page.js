import Image from 'next/image'
import './assets/sass/page.style.css'

export default function Home() {
  return (
      <main>
        <div className='err' id='err'>
          <h1>ERROR:</h1>
          <span id='err_reason'>

          </span>
        </div>
        <div className='badges'>
        <div className='languages'>
            <h1>📋 Languages</h1>
            <ul>
              <li>
                <a id='apachegroovy'>
                  <img id='agimg' src='https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='c'>
                  <img id='cimg' src='https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='c#'>
                  <img id='csharpimg' src='https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='c++'>
                  <img id='cplusimg' src='https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='clojure'>
                  <img id='cjimg' src='https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure'>
                  </img>
                </a>
              </li>
              <li>
                <a id='crystal'>
                  <img id='cryimg' src='https://img.shields.io/badge/crystal-%23000000.svg?style=for-the-badge&logo=crystal&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='css3'>
                  <img id='css3_img' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='dart'>
                  <img id='dart_img' src='https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='elixir'>
                  <img id='elixir_img' src='https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='elm'>
                  <img id='elm_img' src='https://img.shields.io/badge/Elm-60B5CC?style=for-the-badge&logo=elm&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='erlang'>
                  <img id='erlang_img' src='https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533'>
                  </img>
                </a>
              </li>
              <li>
                <a id='fortran'>
                  <img id='fortran_img' src='https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='go'>
                  <img id='go_img' src='https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='graphql'>
                  <img id='graphql_img' src='https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='haskell'>
                  <img id='haskell_img' src='https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='html'>
                  <img id='html_img' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='java'>
                  <img id='java_img' src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='js'>
                  <img id='js_img' src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'>
                  </img>
                </a>
              </li>
              <li>
                <a id='julia'>
                  <img id='julia_img' src='https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='kotlin'>
                  <img id='kotlin_img' src='https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='latex'>
                  <img id='latex_img' src='https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='lua'>
                  <img id='lua_img' src='https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='md'>
                  <img id='md_img' src='https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='nim'>
                  <img id='nim_img' src='https://img.shields.io/badge/nim-%23FFE953.svg?style=for-the-badge&logo=nim&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='nix'>
                  <img id='nix_img' src='https://img.shields.io/badge/NIX-5277C3.svg?style=for-the-badge&logo=NixOS&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='objc'>
                  <img id='objc_img' src='https://img.shields.io/badge/OBJECTIVE--C-%233A95E3.svg?style=for-the-badge&logo=apple&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='octave'>
                  <img id='octave_img' src='https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=fcd683'>
                  </img>
                </a>
              </li>
              <li>
                <a id='orgmode'>
                  <img id='orgmode_img' src='https://img.shields.io/badge/orgmode-%2377AA99.svg?style=for-the-badge&logo=org&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='perl'>
                  <img id='perl_img' src='https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='php'>
                  <img id='php_img' src='https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='powers'>
                  <img id='powers_img' src='https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='py'>
                  <img id='py_img' src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'>
                  </img>
                </a>
              </li>
              <li>
                <a id='r'>
                  <img id='r_img' src='https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='ruby'>
                  <img id='ruby_img' src='https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='rust'>
                  <img id='rust_img' src='https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='scala'>
                  <img id='scala_img' src='https://img.shields.io/badge/scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='shell'>
                  <img id='shell_img' src='https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='solidity'>
                  <img id='solidity_img' src='https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='swift'>
                  <img id='swift_img' src='https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='ts'>
                  <img id='ts_img' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='wt'>
                  <img id='wt_img' src='https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='zig'>
                  <img id='zig_img' src='https://img.shields.io/badge/Zig-%23F7A41D.svg?style=for-the-badge&logo=zig&logoColor=white'>
                  </img>
                </a>
              </li>
            </ul>
          </div>
        <div className='databases'>
            <h1>💾 Databases</h1>
            <ul>
              <li>
                <a id='amzdb'>
                  <img id='amzdb_img' src='https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='csdr'>
                  <img id='csdr_img' src='https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='croh'>
                  <img id='croh_img' src='https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='couch'>
                  <img id='couch_img' src='https://img.shields.io/badge/Couchbase-EA2328?style=for-the-badge&logo=couchbase&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='msql'>
                  <img id='msql_img' src='https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='mondb'>
                  <img id='mondb_img' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='mydb'>
                  <img id='mydb_img' src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='neo'>
                  <img id='neo_img' src='https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='planet'>
                  <img id='planet_img' src='https://img.shields.io/badge/planetscale-%23000000.svg?style=for-the-badge&logo=planetscale&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='postgres'>
                  <img id='postgres_img' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='realm'>
                  <img id='realm_img' src='https://img.shields.io/badge/Realm-39477F?style=for-the-badge&logo=realm&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='td'>
                  <img id='td_img' src='https://img.shields.io/badge/Teradata-F37440?style=for-the-badge&logo=teradata&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='srrdb'>
                  <img id='srrdb_img' src='https://img.shields.io/badge/SurrealDB-FF00A0?style=for-the-badge&logo=surrealdb&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='sb'>
                  <img id='sb_img' src='https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='sqlite'>
                  <img id='sqlite_img' src='https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='ss'>
                  <img id='ss_img' src='https://img.shields.io/badge/Single%20Store-AA00FF?style=for-the-badge&logo=singlestore&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='redis'>
                  <img id='redis_img' src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='fb'>
                  <img id='fb_img' src='https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white'>
                  </img>
                </a>
              </li>
              <li>
                <a id='infdb'>
                  <img id='infdb_img' src='https://img.shields.io/badge/InfluxDB-22ADF6?style=for-the-badge&logo=InfluxDB&logoColor=white'>
                  </img>
                </a>
              </li>
            </ul>
          </div>
        <div className='frameworks_platforms_libs'>
            <h1>📚 Frameworks, Platforms and Libraries</h1>
            <ul>
              <li>
                <a id='dotnet'>
                  <img id='dotnet_img' src='https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='adonisjs'>
                  <img id='adonisjs_img' src='https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='anaconda'>
                  <img id='anaconda_img' src='https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='angular'>
                  <img id='angulan_img' src='https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='angularjs'>
                  <img id='angularjs_img' src='https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='antdesign'>
                  <img id='antdesign_img' src='https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='apachespark'>
                  <img id='apachespark_img' src='https://img.shields.io/badge/Apache%20Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black'/>
                </a>
              </li>
              <li>
                <a id='apachekafka'>
                  <img id='apachekafka_img' src='https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka'/>
                </a>
              </li>
              <li>
                <a id='apachehadoop'>
                  <img id='apachehadoop_img' src='https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black'/>
                </a>
              </li>
              <li>
                <a id='apachehive'>
                  <img id='apachehive_img' src='https://img.shields.io/badge/Apache%20Hive-FDEE21?style=for-the-badge&logo=apachehive&logoColor=black'/>
                </a>
              </li>
              <li>
                <a id='apollographql'>
                  <img id='apollographql_img' src='https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql'/>
                </a>
              </li>
              <li>
                <a id='aurelia'>
                  <img id='aurelia_img' src='https://img.shields.io/badge/aurelia-%23ED2B88.svg?style=for-the-badge&logo=aurelia&logoColor=fff'/>
                </a>
              </li>
              <li>
                <a id='blazor'>
                  <img id='blazor_img' src='https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='bootstrap'>
                  <img id='bootstrap_img' src='https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='buefy'>
                  <img id='buefy_img' src='https://img.shields.io/badge/Buefy-7957D5?style=for-the-badge&logo=buefy&logoColor=48289E'/>
                </a>
              </li>
              <li>
                <a id='bulma'>
                  <img id='bulma_img' src='https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='bun'>
                  <img id='bun_img' src='https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='chakraui'>
                  <img id='chakraui_img' src='https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='chartjs'>
                  <img id='chartjs_img' src='https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='codeigniter'>
                  <img id='codeigniter_img' src='https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='daisyui'>
                  <img id='daisyui_img' src='https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='denojs'>
                  <img id='denojs_img' src='https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='directus'>
                  <img id='directus_img' src='https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='django'>
                  <img id='django_img' src='https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='django_rest'>
                  <img id='django_rest_img' src='https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray'/>
                </a>
              </li>
              <li>
                <a id='drupal'>
                  <img id='drupal_img' src='https://img.shields.io/badge/drupal-%230678BE.svg?style=for-the-badge&logo=drupal&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='electron'>
                  <img id='electron_img' src='https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='ember'>
                  <img id='ember_img' src='https://img.shields.io/badge/ember-1C1E24?style=for-the-badge&logo=ember.js&logoColor=#D04A37'/>
                </a>
              </li>
              <li>
                <a id='expo'>
                  <img id='expo_img' src='https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37'/>
                </a>
              </li>
              <li>
                <a id='express'>
                  <img id='expressjs_img' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'/>
                </a>
              </li>
              <li>
                <a id='fastapi'>
                  <img id='fastapi_img' src='https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi'/>
                </a>
              </li>
              <li>
                <a id='fastify'>
                  <img id='fastify_img' src='https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='flask'>
                  <img id='flask_img' src='https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='flutter'>
                  <img id='flutter_img' src='https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='gatsby'>
                  <img id='gatsby_img' src='https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&logo=gatsby&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='green'>
                  <img id='green_img' src='https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='gulp'>
                  <img id='gulp_img' src='https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='insomnia'>
                  <img id='insomnia_img' src='https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE'/>
                </a>
              </li>
              <li>
                <a id='hugoblack'>
                  <img id='hugoblack_img' src='https://img.shields.io/badge/Hugo-black.svg?style=for-the-badge&logo=Hugo'/>
                </a>
              </li>
              <li>
                <a id='ionic'>
                  <img id='ionic_img' src='https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='jasmine'>
                  <img id='jasmine_img' src='https://img.shields.io/badge/jasmine-%238A4182.svg?style=for-the-badge&logo=jasmine&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='jinja'>
                  <img id='jinja_img' src='https://img.shields.io/badge/jinja-white.svg?style=for-the-badge&logo=jinja&logoColor=black'/>
                </a>
              </li>
              <li>
                <a id='joola'>
                  <img id='joomla_img' src='https://img.shields.io/badge/joomla-%235091CD.svg?style=for-the-badge&logo=joomla&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='jquery'>
                  <img id='jquery_img' src='https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='jwtblack'>
                  <img id='jwtblack_img' src='https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens'/>
                </a>
              </li>
              <li>
                <a id='laravel'>
                  <img id='laravel_img' src='https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='less'>
                  <img id='less_img' src='https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='mui'>
                  <img id='mui_img' src='https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='meteorjs'>
                  <img id='meteorjs_img' src='https://img.shields.io/badge/meteorjs-%23d74c4c.svg?style=for-the-badge&logo=meteor&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='maxcompute'>
                  <img id='maxcompute_img' src='https://img.shields.io/badge/MaxCompute-%23FF6701?style=for-the-badge&logo=alibabacloud&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='npm'>
                  <img id='npm_img' src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='nestjs'>
                  <img id='nestjs_img' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='nextblackstyle'>
                  <img id='nextblackstyle_img' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='nodejs'>
                  <img id='nodejs_img' src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='nodemon'>
                  <img id='nodemon_img' src='https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD'/>
                </a>
              </li>
              <li>
                <a id='nodered'>
                  <img id='nodered_img' src='https://img.shields.io/badge/Node--RED-%238F0000.svg?style=for-the-badge&logo=node-red&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='nuxt'>
                  <img id='nuxt_img' src='https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82'/>
                </a>
              </li>
              <li>
                <a id='nx'>
                  <img id='nx_img' src='https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='opencv'>
                  <img id='opencv_img' src='https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='opengl'>
                  <img id='opengl_img' src='https://img.shields.io/badge/OpenGL-%23FFFFFF.svg?style=for-the-badge&logo=opengl'/>
                </a>
              </li>
              <li>
                <a id='p5'>
                  <img id='p5js_img' src='https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge&logo=p5.js&logoColor=FFFFFF'/>
                </a>
              </li>
              <li>
                <a id='pnpm'>
                  <img id='pnpm_img' src='https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220'/>
                </a>
              </li>
              <li>
                <a id='perfect'>
                  <img id='perfect_img' src='https://img.shields.io/badge/Prefect-%23ffffff.svg?style=for-the-badge&logo=prefect&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='pug'>
                  <img id='pug_img' src='https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454'/>
                </a>
              </li>
              <li>
                <a id='qt'>
                  <img id='qt_img' src='https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='quasar'>
                  <img id='quasar_img' src='https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black'/>
                </a>
              </li>
              <li>
                <a id='ros'>
                  <img id='ros_img' src='https://img.shields.io/badge/ros-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='rabbitmq'>
                  <img id='rabbitmq_img' src='https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='rails'>
                  <img id='rails_img' src='https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='react'>
                  <img id='react_img' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
                </a>
              </li>
              <li>
                <a id='react_native'>
                  <img id='react_native_img' src='https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
                </a>
              </li>
              <li>
                <a id='react_query'>
                  <img id='react_query_img' src='https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='react_router'>
                  <img id='react_router_img' src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='react_hook'>
                  <img id='react_hook_img' src='https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='redux'>
                  <img id='redux_img' src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='remix'>
                  <img id='remix_img' src='https://img.shields.io/badge/remix-%23000.svg?style=for-the-badge&logo=remix&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='rollupjs'>
                  <img id='rollupjs_img' src='https://img.shields.io/badge/RollupJS-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='rxjs'>
                  <img id='rxjs_img' src='https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='sass'>
                  <img id='sass_img' src='https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='semantic'>
                  <img id='semantic_img' src='https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='socketio'>
                  <img id='socketio_img' src='https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101'/>
                </a>
              </li>
              <li>
                <a id='solidjs'>
                  <img id='solidjs_img' src='https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb'/>
                </a>
              </li>
              <li>
                <a id='spring'>
                  <img id='spring_img' src='https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='strapi'>
                  <img id='strapi_img' src='https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='styled'>
                  <img id='styled_img' src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='stylus'>
                  <img id='stylus_img' src='https://img.shields.io/badge/stylus-%23ff6347.svg?style=for-the-badge&logo=stylus&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='svelte'>
                  <img id='svelte_img' src='https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='symfony'>
                  <img id='symfony_img' src='https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='tailwindcss'>
                  <img id='tailwindcss_img' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='tauri'>
                  <img id='tauri_img' src='https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF'/>
                </a>
              </li>
              <li>
                <a id='threejs'>
                  <img id='threejs_img' src='https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='thymeleaf'>
                  <img id='thymeleaf_img' src='https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='typegraphql'>
                  <img id='typegraphql_img' src='https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge'/>
                </a>
              </li>
              <li>
                <a id='unocss'>
                  <img id='unocss_img' src='https://img.shields.io/badge/unocss-333333.svg?style=for-the-badge&logo=unocss&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='vite'>
                  <img id='vite_img' src='https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='vuejs'>
                  <img id='vuejs_img' src='https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D'/>
                </a>
              </li>
              <li>
                <a id='vuetify'>
                  <img id='vuetify_img' src='https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF'/>
                </a>
              </li>
              <li>
                <a id='webgl'>
                  <img id='webgl_img' src='https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white&style=for-the-badge'/>
                </a>
              </li>
              <li>
                <a id='webpack'>
                  <img id='webpack_img' src='https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black'/>
                </a>
              </li>
              <li>
                <a id='web3'>
                  <img id='web3_img' src='https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='windicss'>
                  <img id='windicss_img' src='https://img.shields.io/badge/windicss-48B0F1.svg?style=for-the-badge&logo=windi-css&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='wordpress'>
                  <img id='wordpress_img' src='https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='xamarin'>
                  <img id='xamarin_img' src='https://img.shields.io/badge/Xamarin-3199DC?style=for-the-badge&logo=xamarin&logoColor=white'/>
                </a>
              </li>
              <li>
                <a id='yarn'>
                  <img id='yarn_img' src='https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='picked'>
          <h1>Picked Languages & Frameworks and DB`s.</h1>
          <ul id='pickedItems'>

          </ul>
          <div className='generation'>
            <div className='generate'>
              <a id='removeAllBadges'>Remove All</a>
            </div>
          </div>
        </div>
        <div className='markdown'>
          <h1>Generated Markdown Part</h1>
          <div className='copy'>
            <textarea id='copy_md_part' contentEditable="false">
            </textarea>
          </div>
          <a id='copy_md_part_text'>Copy</a>
        </div>
        <script src='languages.databases.frameworks.js'/>

      </main>

  )
}
