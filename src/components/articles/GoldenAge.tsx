import Album from './../../models/photographs/goldenAge';
import Headline from './../shared/Headline';
import Layout from './../shared/Layout';
import Photograph from '../shared/Photograph';

const GoldenAge = () => {
  return (
    <Layout title = { Album.getTitle().getValue() }>
      <div className = 'container'>
        <Headline album = { Album } locale = { 'en' } />

        <p>Наступавшая золотая осень, радовала глаза, чудесным образом наполняя новыми красками каждый живой листок. Яркое солнце всеми силами согревало землю, преподнося летнее настроение к трону вошедшей в права правления осени. Времени года, навсегда вошедшего в историю города, белоснежно белые стены, крепости которого, гордо возвышались на противоположном берегу Куйбышевского водохранилища. Здесь, посреди холмов, где по приданию без всякого огня кипит вода, стоит тысячелетний город, основанный булгарами, как пограничная крепость на севере их государства. Такой Казань предстала и пред Улу-Мухамеддом, золотоордынским ханом, и пред войском Ивана IV. Возвышаясь над временем, город невозмутимо поднимался с колен, очаровывая добротой и гостеприимством объединяя в своих границах воевавших по разные стороны народы. Таким она предстала и передо мной, вернувшимся в Казань спустя долгие шесть лет.</p>

        <Photograph album = { Album } index = { 15 } />

        <p>Этому предшествовало, начавшееся еще до рассвета солнца, длительное путешествие сквозь меняющиеся пейзажи трех регионов России. Где редкие леса, разбитые многочисленными деревеньками Нижегородской области постепенно переходили в бескрайний хвойный лес, раскинувшийся по территории Чувашии, рассеченной чередой оврагов и речушек. Дорога меняла вид, с каждым километром неся на восток, как географический, так и культурный. Расставшись с последним поворотом перед границей Татарстана, шоссейное полотно, окруженное нетронутыми человеком полями, устремилось к небосводу, у границы которого, спустя час ожидания, стоя между высокими холмами, на противоположном берегу Волги, предстала Казань.</p>

        <Photograph album = { Album } index = { 0 } />
        <Photograph album = { Album } index = { 1 } />

        <p>Прибыв в Казань с друзьями, ранее не имевшими возможности окунуться в атмосферу местной культуры, я был, несомненно, рад слышать их отзывы, основанные по большей части на сильной градации, так пестро проводившей черту меж нашими народами и культурами. Здесь не было места грубости Нижнего, и царящего в нем безразличия к окружающим, на место эгоистичному отношению приходило местное гостеприимство, роднившее с Питером.</p>

        <Photograph album = { Album } index = { 2 } />
        <Photograph album = { Album } index = { 3 } />
        <Photograph album = { Album } index = { 4 } />

        <p>Посреди Кремля, расположившись у западных стен, стоит главная соборная мечеть республики - Кул Шариф, названная в честь её последнего имама сеида Кул-Шарифа, одного из предводителей обороны Казани. Будучи разрушенной войсками Ивана Грозного, она была построена вновь, обретя свой современный вид к празднованию тысячелетия города.</p>

        <Photograph album = { Album } index = { 5 } />
        <Photograph album = { Album } index = { 6 } />
        <Photograph album = { Album } index = { 7 } />
        <Photograph album = { Album } index = { 8 } />
        <Photograph album = { Album } index = { 9 } />

        <p>Падающая башня Сююмбике, служащая предметом многолетних споров историков, так и не выяснившим дату основания, она стоит, отклонившись от своей вертикали на целых два метра. Вокруг башни ходит много легенд, сходящихся к одной из первых мусульманок, взявших на себя бремя правления государством, - Сююмбике, царице Казанского ханства.</p>

        <Photograph album = { Album } index = { 12 } />
        <Photograph album = { Album } index = { 11 } />

        <p>Одна из красивейших достопримечательностей города - улица Баумана, где издавна расположен центр торговли и развлечений. Ее название многократно менялось, чему способствовало, и взятие Казани, и появлению Новой слабоды в ее южной части, и происхождения революционера Николая Баумана. На протяжении улицы стоит много памятников и исторических зданий - многострадальная гостиница "Казань", с балкона которой выступал Троцкий, памятник певцу Шаляпину, фонтаны-памятники героям татарских сказок и многие другие, лежащих в основе прекрасного декора города.</p>

        <Photograph album = { Album } index = { 43 } />
        <Photograph album = { Album } index = { 13 } />
        <Photograph album = { Album } index = { 45 } />
        <Photograph album = { Album } index = { 14 } />
        <Photograph album = { Album } index = { 42 } />
        <Photograph album = { Album } index = { 37 } />

        <p>Пирамида - здание развлекательного центра, памятник символизирующий торжество современной архитектуры.</p>

        <Photograph album = { Album } index = { 16 } />
        <Photograph album = { Album } index = { 19 } />
        <Photograph album = { Album } index = { 17 } />
        <Photograph album = { Album } index = { 23 } />
        <Photograph album = { Album } index = { 22 } />
        <Photograph album = { Album } index = { 21 } />
        <Photograph album = { Album } index = { 20 } />
        <Photograph album = { Album } index = { 26 } />

        <p>Памятник Мусе Джалилю, установленного в память о герое Сюза, организовавшего антифашистское подполье, поставившего целью осуществление восстания военнопленных.</p>

        <Photograph album = { Album } index = { 28 } />
        <Photograph album = { Album } index = { 29 } />
        <Photograph album = { Album } index = { 30 } />
        <Photograph album = { Album } index = { 31 } />
        <Photograph album = { Album } index = { 33 } />
        <Photograph album = { Album } index = { 32 } />
        <Photograph album = { Album } index = { 34 } />
        <Photograph album = { Album } index = { 36 } />

        <p>Часы универсиады, поставленные напротив знаменитых часов на Баумана, уникальный арт-объект отсчитывающий время до начала Казанской универсиады.</p>

        <Photograph album = { Album } index = { 38 } />
        <Photograph album = { Album } index = { 39 } />

        <p>Короткие два дня путешествия пролетели мимолетом, оставив позади воспоминания и неизменное желание вернуться вновь. Вслед за Казанью ушла и теплая погода, оставив один на один, с морозной осенью, пестрящей красно-желтыми красками, словно сходящими с картины Левитана.</p>

        <Photograph album = { Album } index = { 40 } />
      </div>
    </Layout>
  );
}

export default GoldenAge;