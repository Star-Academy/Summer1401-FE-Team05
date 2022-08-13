import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from 'src/app/services/auth.service';
import {GameComponent} from './game.component';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameComponent],
            imports: [RouterTestingModule],
            providers: [AuthService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should create', () => {
    //     // const signUpMethodSpy = spyOn(response, 'json');
    //     // expect(signUpMethodSpy).toHaveBeenCalled();
    // });
});
